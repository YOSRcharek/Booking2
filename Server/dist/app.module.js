"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const properties_module_1 = require("./properties/properties.module");
const mongoose_1 = require("@nestjs/mongoose");
const hosts_module_1 = require("./hosts/hosts.module");
const reservations_module_1 = require("./reservations/reservations.module");
const reviews_module_1 = require("./reviews/reviews.module");
const availability_module_1 = require("./availability/availability.module");
const cors_middleware_1 = require("./cors.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(cors_middleware_1.Cors).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [properties_module_1.PropertiesModule, mongoose_1.MongooseModule.forRoot('mongodb+srv://amirch:resa123@resa.8kkkqma.mongodb.net/Resa'), hosts_module_1.HostsModule, reservations_module_1.ReservationsModule, reviews_module_1.ReviewsModule, availability_module_1.AvailabilityModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map