System.register(['angular2/core', './property-binding.component'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n     <section class =\"parent\">\n        <h2>This is the parent component </h2>\n        <h4>Please enter your name</h4>\n        <input type=\"text\" [(ngModel)]=\"name\">\n        <br><br>\n        <p>{{name}}</p>\n        <section class=\"child\">\n            <my-property-binding [myName]=\"name\" [myAge] = \"26\" (hobbiesChanged) = \"hobbies = $event\"></my-property-binding>\n        </section>\n      </section>\n      <p>My hobbies are: {{hobbies}}<p>\n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFIRSwrQkFBUSxHQUFSO2dCQUVELENBQUM7Z0JBckJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLHdkQVlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHFEQUF3QixDQUFDO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsdUNBS0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vcHJvcGVydHktYmluZGluZy5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICA8c2VjdGlvbiBjbGFzcyA9XCJwYXJlbnRcIj5cbiAgICAgICAgPGgyPlRoaXMgaXMgdGhlIHBhcmVudCBjb21wb25lbnQgPC9oMj5cbiAgICAgICAgPGg0PlBsZWFzZSBlbnRlciB5b3VyIG5hbWU8L2g0PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICAgICAgPGJyPjxicj5cbiAgICAgICAgPHA+e3tuYW1lfX08L3A+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgIDxteS1wcm9wZXJ0eS1iaW5kaW5nIFtteU5hbWVdPVwibmFtZVwiIFtteUFnZV0gPSBcIjI2XCIgKGhvYmJpZXNDaGFuZ2VkKSA9IFwiaG9iYmllcyA9ICRldmVudFwiPjwvbXktcHJvcGVydHktYmluZGluZz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHA+TXkgaG9iYmllcyBhcmU6IHt7aG9iYmllc319PHA+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgaG9iYmllczogc3RyaW5nXG4gICBuZ09uSW5pdCgpIDphbnl7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
