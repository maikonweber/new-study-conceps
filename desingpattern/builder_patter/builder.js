class House {
    constructor(builder) {
        this.bedrooms = builder.bedrooms;
        this.bathrooms = builder.bathrooms;
        this.kitchens = builder.kitchens;
        this.garages = builder.garages;
    }
}

class HouseBuilder {
    constructor() {
        this.bedrooms = 0;
        this.bathrooms = 0;
        this.kitchens = 0;
        this.garages = 0;
    }

    setBedRooms(bedrooms) {
        this.bedrooms = bedrooms
        return this
    }
    setKitchens(kitchens) {
        this.kitchens = kitchens
        return this;
    }

    setBathrooms(bathrooms) {
        this.bathrooms = bathrooms
        return this
    }
    setGarage(garages) {
        this.garages = garages
        return this
    }
    build() {
    return new House(this);
    }
}

const house1 = new HouseBuilder()
    .setBedRooms(3)
    .setKitchens(1)
    .setBathrooms(1)
    .setGarage(1)
    .build();

console.log(house1)

