import "../../../dist/wj-master.js";
import { makeServer } from './mirage-config.js';

if (import.meta.env.DEV) {
  makeServer();
}