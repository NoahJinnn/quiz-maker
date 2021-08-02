/**
 * Import lib and types
 */
import '@animxyz/core';
import 'animate.css';
/**
 * Overriding scss and add our feature here
 */
import './styles/tachyons.min.css';
import './styles/index.scss';
/**
 * Import features and components belows
 */
import { getLibConfig } from './config';
/**
 * Export default
 */
export * from "./assets/icons";
export * from "./components/index";
export * from "./constants/index";
export * from "./hooks/index";
export * from "./utils/index";
/**
 * Export const and funtions
 */
export { getLibConfig };
