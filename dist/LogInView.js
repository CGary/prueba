"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var LogInView = function (props) {
    var logIn = props.logIn, loading = props.loading;
    var onClickButtonHandler = function () {
        var divUser = document.getElementById("user");
        var divPass = document.getElementById("pass");
        var email = divUser.value;
        var password = divPass.value;
        logIn({ email: email, password: password });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: "User" }), (0, jsx_runtime_1.jsx)("input", { id: "user" }), (0, jsx_runtime_1.jsx)("div", { children: "Pass" }), (0, jsx_runtime_1.jsx)("input", { id: "pass" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClickButtonHandler }, { children: "Login" })), loading && (0, jsx_runtime_1.jsx)("div", { children: "Loading..." })] }));
};
exports.LogInView = LogInView;
exports.default = LogInView;
//# sourceMappingURL=LogInView.js.map