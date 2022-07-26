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
exports.IntrospectivePropTypes = void 0;
const PropTypes = __importStar(require("prop-types"));
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const mapValues_1 = __importDefault(require("lodash/mapValues"));
const common_1 = require("./common");
function wrapPropType(propType, name) {
    if (name === 'PropTypes' ||
        name === 'checkPropTypes' ||
        name === 'resetWarningCache' ||
        name === 'nominalTypeHack') {
        return propType;
    }
    if (propType.isRequired !== undefined) {
        let res = common_1.addType(propType, name);
        res = common_1.addRequired(res);
        return res;
    }
    else {
        const original = (a) => propType(a);
        return (arg) => {
            let res = original(arg);
            res = common_1.addType(res, name);
            res = common_1.addArg(res, arg);
            res = common_1.addRequired(res);
            return res;
        };
    }
}
function wrapPropTypes() {
    const copy = cloneDeep_1.default(PropTypes);
    return mapValues_1.default(copy, (v, k) => wrapPropType(v, k));
}
exports.IntrospectivePropTypes = wrapPropTypes();
exports.default = exports.IntrospectivePropTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9zcGVjdGl2ZS1wcm9wLXR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ludHJvc3BlY3RpdmUtcHJvcC10eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXVDO0FBQ3ZDLGlFQUF3QztBQUN4QyxpRUFBd0M7QUFDeEMscUNBQXVEO0FBdUN2RCxTQUFTLFlBQVksQ0FBQyxRQUFhLEVBQUUsSUFBUztJQUM1QyxJQUNFLElBQUksS0FBSyxXQUFXO1FBQ3BCLElBQUksS0FBSyxnQkFBZ0I7UUFDekIsSUFBSSxLQUFLLG1CQUFtQjtRQUM1QixJQUFJLEtBQUssaUJBQWlCLEVBQzFCO1FBQ0EsT0FBTyxRQUFRLENBQUE7S0FDaEI7SUFDRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1FBRXJDLElBQUksR0FBRyxHQUFHLGdCQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2pDLEdBQUcsR0FBRyxvQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLE9BQU8sR0FBRyxDQUFBO0tBQ1g7U0FBTTtRQUVMLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsT0FBTyxDQUNMLEdBQU0sRUFDd0QsRUFBRTtZQUNoRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDdkIsR0FBRyxHQUFHLGdCQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxlQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ3RCLEdBQUcsR0FBRyxvQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3RCLE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxDQUFBO0tBQ0Y7QUFDSCxDQUFDO0FBRUQsU0FBUyxhQUFhO0lBQ3BCLE1BQU0sSUFBSSxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDakMsT0FBTyxtQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM3RCxDQUFDO0FBRVksUUFBQSxzQkFBc0IsR0FBRyxhQUFhLEVBQUUsQ0FBQTtBQUNyRCxrQkFBZSw4QkFBc0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJ1xuaW1wb3J0IG1hcFZhbHVlcyBmcm9tICdsb2Rhc2gvbWFwVmFsdWVzJ1xuaW1wb3J0IHsgYWRkQXJnLCBhZGRSZXF1aXJlZCwgYWRkVHlwZSB9IGZyb20gJy4vY29tbW9uJ1xuXG50eXBlIE5vaXNlID0gJ2NoZWNrUHJvcFR5cGVzJyB8ICdyZXNldFdhcm5pbmdDYWNoZScgfCAnbm9taW5hbFR5cGVIYWNrJ1xuXG50eXBlIFNpbXBsZSA9XG4gIHwgJ2FueSdcbiAgfCAnYXJyYXknXG4gIHwgJ2Jvb2wnXG4gIHwgJ2Z1bmMnXG4gIHwgJ251bWJlcidcbiAgfCAnb2JqZWN0J1xuICB8ICdzdHJpbmcnXG4gIHwgJ25vZGUnXG4gIHwgJ2VsZW1lbnQnXG4gIHwgJ3N5bWJvbCdcbiAgfCAnZWxlbWVudFR5cGUnXG5cbnR5cGUgQ29tcGxleCA9XG4gIHwgJ2luc3RhbmNlT2YnXG4gIHwgJ29uZU9mJ1xuICB8ICdvbmVPZlR5cGUnXG4gIHwgJ2FycmF5T2YnXG4gIHwgJ29iamVjdE9mJ1xuICB8ICdzaGFwZSdcbiAgfCAnZXhhY3QnXG5cbnR5cGUgVHlwZXMgPSBOb2lzZSB8IFNpbXBsZSB8IENvbXBsZXhcblxudHlwZSBQcm9wVHlwZSA9IHR5cGVvZiBQcm9wVHlwZXNba2V5b2YgdHlwZW9mIFByb3BUeXBlc11cblxuLy8gQ2lyY3VsYXIgcmVmZXJlbmNlLiBSZXR1cm4gb3JpZ2luYWwuXG5mdW5jdGlvbiB3cmFwUHJvcFR5cGU8VD4ocHJvcFR5cGU6IFQsIG5hbWU6ICdQcm9wVHlwZXMnKTogVFxuLy8gTm9pc2UuIFJldHVybiBvcmlnaW5hbC5cbmZ1bmN0aW9uIHdyYXBQcm9wVHlwZTxUIGV4dGVuZHMgUHJvcFR5cGU+KHByb3BUeXBlOiBULCBuYW1lOiBOb2lzZSk6IFRcbi8vIFNpbXBsZS4gUmV0dXJuIG9yaWdpbmFsIHdpdGggYWRkZWQgcHJvcGVydGllcy5cbmZ1bmN0aW9uIHdyYXBQcm9wVHlwZTxUIGV4dGVuZHMgUHJvcFR5cGU+KHByb3BUeXBlOiBULCBuYW1lOiBTaW1wbGUpOiBUXG4vLyBDb21wbGV4LiBSZXR1cm4gb3JpZ2luYWwtbG9va2luZyBmdW5jdGlvbiB3aXRoIGFkZGVkIGZ1bmN0aW9uYWxpdHkgaW4gY2FsbC5cbmZ1bmN0aW9uIHdyYXBQcm9wVHlwZTxUIGV4dGVuZHMgUHJvcFR5cGU+KHByb3BUeXBlOiBULCBuYW1lOiBDb21wbGV4KTogVFxuZnVuY3Rpb24gd3JhcFByb3BUeXBlPFQgZXh0ZW5kcyBQcm9wVHlwZT4ocHJvcFR5cGU6IFQsIG5hbWU6IFR5cGVzKTogVFxuZnVuY3Rpb24gd3JhcFByb3BUeXBlKHByb3BUeXBlOiBhbnksIG5hbWU6IGFueSk6IGFueSB7XG4gIGlmIChcbiAgICBuYW1lID09PSAnUHJvcFR5cGVzJyB8fFxuICAgIG5hbWUgPT09ICdjaGVja1Byb3BUeXBlcycgfHxcbiAgICBuYW1lID09PSAncmVzZXRXYXJuaW5nQ2FjaGUnIHx8XG4gICAgbmFtZSA9PT0gJ25vbWluYWxUeXBlSGFjaydcbiAgKSB7XG4gICAgcmV0dXJuIHByb3BUeXBlXG4gIH1cbiAgaWYgKHByb3BUeXBlLmlzUmVxdWlyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIFNpbXBsZSB0eXBlLiBKdXN0IGV4dGVuZCB0aGUgb2JqZWN0LlxuICAgIGxldCByZXMgPSBhZGRUeXBlKHByb3BUeXBlLCBuYW1lKVxuICAgIHJlcyA9IGFkZFJlcXVpcmVkKHJlcylcbiAgICByZXR1cm4gcmVzXG4gIH0gZWxzZSB7XG4gICAgLy8gQ29tcGxleCB0eXBlLiBNdXN0IGV4dGVuZCB0aGUgY3JlYXRvcidzIHJldHVybiB2YWx1ZS5cbiAgICBjb25zdCBvcmlnaW5hbCA9IChhOiBhbnkpID0+IHByb3BUeXBlKGEpXG4gICAgcmV0dXJuIDxUPihcbiAgICAgIGFyZzogVCxcbiAgICApOiB7IGlzUmVxdWlyZWQ6IGFueTsgdHlwZTogc3RyaW5nOyBhcmc6IFQ7IHJlcXVpcmVkOiBib29sZWFuIH0gPT4ge1xuICAgICAgbGV0IHJlcyA9IG9yaWdpbmFsKGFyZylcbiAgICAgIHJlcyA9IGFkZFR5cGUocmVzLCBuYW1lKVxuICAgICAgcmVzID0gYWRkQXJnKHJlcywgYXJnKVxuICAgICAgcmVzID0gYWRkUmVxdWlyZWQocmVzKVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwUHJvcFR5cGVzKCk6IHsgW1AgaW4ga2V5b2YgdHlwZW9mIFByb3BUeXBlc106IGFueSB9IHtcbiAgY29uc3QgY29weSA9IGNsb25lRGVlcChQcm9wVHlwZXMpXG4gIHJldHVybiBtYXBWYWx1ZXMoY29weSwgKHYsIGspID0+IHdyYXBQcm9wVHlwZSh2LCA8VHlwZXM+aykpXG59XG5cbmV4cG9ydCBjb25zdCBJbnRyb3NwZWN0aXZlUHJvcFR5cGVzID0gd3JhcFByb3BUeXBlcygpXG5leHBvcnQgZGVmYXVsdCBJbnRyb3NwZWN0aXZlUHJvcFR5cGVzXG4iXX0=