"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntrospectivePropTypesExtra = void 0;
const PropTypesExtra = __importStar(require("prop-types-extra"));
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const mapValues_1 = __importDefault(require("lodash/mapValues"));
const common_1 = require("./common");
function wrapPropTypeExtra(propType, name) {
    if (propType.isRequired !== undefined) {
        let res = common_1.addType(propType, name);
        res = common_1.addRequired(res);
        return res;
    }
    else {
        const original = (...args) => propType(...args);
        return (...args) => {
            let res = original(...args);
            res = common_1.addType(res, name);
            res = common_1.addArg(res, args);
            res = common_1.addRequired(res);
            return res;
        };
    }
}
function wrapPropTypesExtra() {
    const copy = cloneDeep_1.default(PropTypesExtra);
    return mapValues_1.default(copy, (v, k) => wrapPropTypeExtra(v, k));
}
exports.IntrospectivePropTypesExtra = wrapPropTypesExtra();
exports.default = exports.IntrospectivePropTypesExtra;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9zcGVjdGl2ZS1wcm9wLXR5cGVzLWV4dHJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ludHJvc3BlY3RpdmUtcHJvcC10eXBlcy1leHRyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWtEO0FBQ2xELGlFQUF3QztBQUN4QyxpRUFBd0M7QUFDeEMscUNBQXVEO0FBY3ZELFNBQVMsaUJBQWlCLENBQUMsUUFBYSxFQUFFLElBQVM7SUFDakQsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUVyQyxJQUFJLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNqQyxHQUFHLEdBQUcsb0JBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLEdBQUcsQ0FBQTtLQUNYO1NBQU07UUFFTCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUN0RCxPQUFPLENBQ0wsR0FBRyxJQUFTLEVBQ2tELEVBQUU7WUFDaEUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7WUFDM0IsR0FBRyxHQUFHLGdCQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxlQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3ZCLEdBQUcsR0FBRyxvQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3RCLE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxDQUFBO0tBQ0Y7QUFDSCxDQUFDO0FBRUQsU0FBUyxrQkFBa0I7SUFDekIsTUFBTSxJQUFJLEdBQUcsbUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUN0QyxPQUFPLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbEUsQ0FBQztBQUVZLFFBQUEsMkJBQTJCLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQTtBQUMvRCxrQkFBZSxtQ0FBMkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFByb3BUeXBlc0V4dHJhIGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnXG5pbXBvcnQgbWFwVmFsdWVzIGZyb20gJ2xvZGFzaC9tYXBWYWx1ZXMnXG5pbXBvcnQgeyBhZGRBcmcsIGFkZFJlcXVpcmVkLCBhZGRUeXBlIH0gZnJvbSAnLi9jb21tb24nXG5cbnR5cGUgU2ltcGxlID0gJ2VsZW1lbnRUeXBlJyB8ICdjb21wb25lbnRPckVsZW1lbnQnXG50eXBlIENvbXBsZXggPSAnYWxsJyB8ICdpc1JlcXVpcmVkRm9yQTExeScgfCAnZGVwcmVjYXRlZCdcbnR5cGUgVHlwZXMgPSBTaW1wbGUgfCBDb21wbGV4XG50eXBlIFByb3BUeXBlID0gdHlwZW9mIFByb3BUeXBlc0V4dHJhW2tleW9mIHR5cGVvZiBQcm9wVHlwZXNFeHRyYV1cblxuLy8gQ2lyY3VsYXIgcmVmZXJlbmNlLiBSZXR1cm4gb3JpZ2luYWwuXG5mdW5jdGlvbiB3cmFwUHJvcFR5cGVFeHRyYTxUPihwcm9wVHlwZTogVCwgbmFtZTogJ1Byb3BUeXBlc0V4dHJhJyk6IFRcbi8vIFNpbXBsZS4gUmV0dXJuIG9yaWdpbmFsIHdpdGggYWRkZWQgcHJvcGVydGllcy5cbmZ1bmN0aW9uIHdyYXBQcm9wVHlwZUV4dHJhPFQgZXh0ZW5kcyBQcm9wVHlwZT4ocHJvcFR5cGU6IFQsIG5hbWU6IFNpbXBsZSk6IFRcbi8vIENvbXBsZXguIFJldHVybiBvcmlnaW5hbC1sb29raW5nIGZ1bmN0aW9uIHdpdGggYWRkZWQgZnVuY3Rpb25hbGl0eSBpbiBjYWxsLlxuZnVuY3Rpb24gd3JhcFByb3BUeXBlRXh0cmE8VCBleHRlbmRzIFByb3BUeXBlPihwcm9wVHlwZTogVCwgbmFtZTogQ29tcGxleCk6IFRcbmZ1bmN0aW9uIHdyYXBQcm9wVHlwZUV4dHJhPFQgZXh0ZW5kcyBQcm9wVHlwZT4ocHJvcFR5cGU6IFQsIG5hbWU6IFR5cGVzKTogVFxuZnVuY3Rpb24gd3JhcFByb3BUeXBlRXh0cmEocHJvcFR5cGU6IGFueSwgbmFtZTogYW55KTogYW55IHtcbiAgaWYgKHByb3BUeXBlLmlzUmVxdWlyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIFNpbXBsZSB0eXBlLiBKdXN0IGV4dGVuZCB0aGUgb2JqZWN0LlxuICAgIGxldCByZXMgPSBhZGRUeXBlKHByb3BUeXBlLCBuYW1lKVxuICAgIHJlcyA9IGFkZFJlcXVpcmVkKHJlcylcbiAgICByZXR1cm4gcmVzXG4gIH0gZWxzZSB7XG4gICAgLy8gQ29tcGxleCB0eXBlLiBNdXN0IGV4dGVuZCB0aGUgY3JlYXRvcidzIHJldHVybiB2YWx1ZS5cbiAgICBjb25zdCBvcmlnaW5hbCA9ICguLi5hcmdzOiBhbnlbXSkgPT4gcHJvcFR5cGUoLi4uYXJncylcbiAgICByZXR1cm4gPFQ+KFxuICAgICAgLi4uYXJnczogVFtdXG4gICAgKTogeyBpc1JlcXVpcmVkOiBhbnk7IHR5cGU6IHN0cmluZzsgYXJnOiBUOyByZXF1aXJlZDogYm9vbGVhbiB9ID0+IHtcbiAgICAgIGxldCByZXMgPSBvcmlnaW5hbCguLi5hcmdzKVxuICAgICAgcmVzID0gYWRkVHlwZShyZXMsIG5hbWUpXG4gICAgICByZXMgPSBhZGRBcmcocmVzLCBhcmdzKVxuICAgICAgcmVzID0gYWRkUmVxdWlyZWQocmVzKVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwUHJvcFR5cGVzRXh0cmEoKTogeyBbUCBpbiBrZXlvZiB0eXBlb2YgUHJvcFR5cGVzRXh0cmFdOiBhbnkgfSB7XG4gIGNvbnN0IGNvcHkgPSBjbG9uZURlZXAoUHJvcFR5cGVzRXh0cmEpXG4gIHJldHVybiBtYXBWYWx1ZXMoY29weSwgKHYsIGspID0+IHdyYXBQcm9wVHlwZUV4dHJhKHYsIDxUeXBlcz5rKSlcbn1cblxuZXhwb3J0IGNvbnN0IEludHJvc3BlY3RpdmVQcm9wVHlwZXNFeHRyYSA9IHdyYXBQcm9wVHlwZXNFeHRyYSgpXG5leHBvcnQgZGVmYXVsdCBJbnRyb3NwZWN0aXZlUHJvcFR5cGVzRXh0cmFcbiJdfQ==