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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.values = '';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.name = "";
                };
                AppComponent.prototype.onTest = function () {
                    return "First Name:";
                };
                AppComponent.prototype.onKeyup = function (value) {
                    this.values += value + ' | ';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n      {{onTest()}}\n      <input type=\"text\" [value]=\"name\" [ngClass]=\"{red: true}\" (keyup)=\"onKeyup(inputElement.value)\" #inputElement>\n      <p>{{values}}</p>\n      <br>\n      <br>\n      <input type=\"text\" [(ngModel)] = \"name\">\n      <p>Your Name: {{name}}</p>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnRfc2VjdGlvbjNTdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO29CQUVDLFdBQU0sR0FBRyxFQUFFLENBQUM7Z0JBWWIsQ0FBQztnQkFYQywrQkFBUSxHQUFSO29CQUNBLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLENBQUM7Z0JBRUYsNkJBQU0sR0FBTjtvQkFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELDhCQUFPLEdBQVAsVUFBUSxLQUFhO29CQUNwQixJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQzlCLENBQUM7Z0JBekJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLGlTQVFUO3FCQUNKLENBQUM7O2dDQUFBO2dCQWVGLG1CQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCx1Q0FjQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnRfc2VjdGlvbjNTdGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICB7e29uVGVzdCgpfX1cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJuYW1lXCIgW25nQ2xhc3NdPVwie3JlZDogdHJ1ZX1cIiAoa2V5dXApPVwib25LZXl1cChpbnB1dEVsZW1lbnQudmFsdWUpXCIgI2lucHV0RWxlbWVudD5cbiAgICAgIDxwPnt7dmFsdWVzfX08L3A+XG4gICAgICA8YnI+XG4gICAgICA8YnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXSA9IFwibmFtZVwiPlxuICAgICAgPHA+WW91ciBOYW1lOiB7e25hbWV9fTwvcD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gbmFtZSA6IHN0cmluZztcbiB2YWx1ZXMgPSAnJztcbiAgbmdPbkluaXQoKSA6YW55e1xuICB0aGlzLm5hbWUgPSBcIlwiO1xuICB9XG5cbiBvblRlc3QoKXtcbiAgcmV0dXJuIFwiRmlyc3QgTmFtZTpcIjtcbiB9XG5cbiBvbktleXVwKHZhbHVlOiBzdHJpbmcpIHtcbiAgdGhpcy52YWx1ZXMgKz0gdmFsdWUgKyAnIHwgJztcbiB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
