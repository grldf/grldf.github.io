  var CarbonFootprintCalculator = /** @class */ (function () {
      function CarbonFootprintCalculator(electricityUsage, gasUsage, vehicleFuelUsage, vehicleMileage, publicTransportUsage) {
          this.electricityUsage = electricityUsage;
          this.gasUsage = gasUsage;
          this.vehicleFuelUsage = vehicleFuelUsage;
          this.vehicleMileage = vehicleMileage;
          this.publicTransportUsage = publicTransportUsage;
      }
      CarbonFootprintCalculator.prototype.calculateCarbonFootprint = function () {
          var electricityEmissionFactor = 0.5;
          var gasEmissionFactor = 2.0;
          var vehicleEmissionFactor = 2.5;
          var publicTransportEmissionFactor = 0.1;
          var electricityEmissions = this.electricityUsage * electricityEmissionFactor;
          var gasEmissions = this.gasUsage * gasEmissionFactor;
          var vehicleEmissions = this.vehicleFuelUsage * vehicleEmissionFactor + this.vehicleMileage * vehicleEmissionFactor;
          var publicTransportEmissions = this.publicTransportUsage * publicTransportEmissionFactor;
          var totalEmissions = electricityEmissions + gasEmissions + vehicleEmissions + publicTransportEmissions;
          return totalEmissions;
      };
      return CarbonFootprintCalculator;
  }());
  // done done