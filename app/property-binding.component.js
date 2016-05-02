System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChanged.emit(hobbies);
                };
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "<h2>This is the child component</h2>\n            <p>Hey! {{name}} and I am {{age}} years old! </p>\n            <h4>My hobbies are: </h4>\n            <input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>",
                        inputs: ['name:myName'],
                        outputs: ['hobbiesChanged']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQUE7b0JBQ0UsU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFFVixtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO2dCQU05QyxDQUFDO2dCQUpDLG1EQUFnQixHQUFoQixVQUFpQixPQUFlO29CQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFuQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDWCxRQUFRLEVBQUUscUJBQXFCO3dCQUMvQixRQUFRLEVBQUUsb09BR3lFO3dCQUNuRixNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUM7d0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUMxQixDQUFDOzs0Q0FBQTtnQkFhRiwrQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsK0RBU0MsQ0FBQSIsImZpbGUiOiJwcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbnNlbGVjdG9yOiAnbXktcHJvcGVydHktYmluZGluZycsXG50ZW1wbGF0ZTogYDxoMj5UaGlzIGlzIHRoZSBjaGlsZCBjb21wb25lbnQ8L2gyPlxuICAgICAgICAgICAgPHA+SGV5ISB7e25hbWV9fSBhbmQgSSBhbSB7e2FnZX19IHllYXJzIG9sZCEgPC9wPlxuICAgICAgICAgICAgPGg0Pk15IGhvYmJpZXMgYXJlOiA8L2g0PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIm9uSG9iYmllc0NoYW5nZWQoaG9iYmllcy52YWx1ZSlcIiAjaG9iYmllcz5gLFxuaW5wdXRzOiBbJ25hbWU6bXlOYW1lJ10sXG5vdXRwdXRzOiBbJ2hvYmJpZXNDaGFuZ2VkJ11cbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50e1xuICBuYW1lID0gJyc7XG5cbiAgaG9iYmllc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBvbkhvYmJpZXNDaGFuZ2VkKGhvYmJpZXM6IHN0cmluZyl7XG4gICAgdGhpcy5ob2JiaWVzQ2hhbmdlZC5lbWl0KGhvYmJpZXMpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
