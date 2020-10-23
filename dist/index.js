"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextApp = void 0;
require("dotenv/config");
const next_1 = __importDefault(require("next"));
mext;
const app_1 = __importDefault(require("./app"));
require("./database");
require("./src/services/passport");
require("./src/interfaces/index");
const pages_routes_1 = __importDefault(require("./src/routes/pages.routes"));
const dev = process.env.NODE_ENV !== "production";
exports.nextApp = next_1.default({
  dev,
  dir: "./frontend",
});
const handle = exports.nextApp.getRequestHandler();
(() =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield exports.nextApp.prepare();
    app_1.default.use(pages_routes_1.default);
    app_1.default.all("*", (req, res) => {
      return handle(req, res);
    });
    app_1.default.listen(app_1.default.get("port"));
    console.log(`> Ready on http://localhost:${app_1.default.get("port")}`);
  }))();
//# sourceMappingURL=index.js.map
