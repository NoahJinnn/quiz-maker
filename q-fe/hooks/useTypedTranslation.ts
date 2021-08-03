/* eslint-disable @typescript-eslint/restrict-template-expressions */
import dict from 'locales/vi/common.json';
import useTranslation from 'next-translate/useTranslation';

// returns the property value from object O given property path T
type GetDictValue<T extends string, O> =
  // eslint-disable-next-line prettier/prettier
  T extends `${infer A}.${infer B}`
    ? A extends keyof O
      ? GetDictValue<B, O[A]>
      : never
    : T extends keyof O
    ? O[T]
    : never;

type DeepKeys<T> = T extends object
  ? {
      // eslint-disable-next-line prettier/prettier
      [K in keyof T]-?: `${K & string}` | Concat<K & string, DeepKeys<T[K]>>;
    }[keyof T]
  : '';

type Concat<K extends string, P extends string> = `${K}${'' extends P ? '' : '.'}${P}`;

export const useTypedTranslation = (
  namespace = 'common'
): {
  t: <P extends DeepKeys<typeof dict>>(p: P, opts?: any) => GetDictValue<P, typeof dict>;
} => {
  const { t } = useTranslation();
  // implementation goes here: join keys by dot (depends on your config)
  // and delegate to lib t
  const tTrans = <P extends DeepKeys<typeof dict>>(
    p: P,
    opts?: any
  ): GetDictValue<P, typeof dict> => {
    return t(`${namespace}:${p}`, opts);
  };
  return {
    t: tTrans,
  };
};
