import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * On receive 404 Page => redirect user into home
 */
export default function Default404(): React.ReactNode {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      void router.push('/');
    }, 2000);
  }, []);

  return (
    <div className="w-100 vh-100 flex flex-column justify-center items-center green relative">
      <p className="ma0 pt3 gray f5">Trang không tồn tại</p>
      <p className="ma0 pt3 gray f7">Đang điều hướng...</p>
      <div className="absolute w-100 bottom-1 left-0 center-items gray">
        <p>EZ-Quiz</p>
      </div>
    </div>
  );
}
