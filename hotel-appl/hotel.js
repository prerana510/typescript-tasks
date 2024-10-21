var Hotel = /** @class */ (function () {
    function Hotel(rooms) {
        this.rooms = rooms;
    }
    Hotel.prototype.displayRooms = function () {
        console.log("Available Rooms:");
        this.rooms.forEach(function (room) {
            console.log("".concat(room.id, " - Type: ").concat(room.type, ", Price per Night: $").concat(room.pricePerNight, ", Available: ").concat(room.isAvailable));
        });
    };
    Hotel.prototype.checkAvailability = function (roomId) {
        var room = this.rooms.filter(function (r) { return r.id === roomId; })[0];
        return room ? room.isAvailable : false;
    };
    Hotel.prototype.bookRoom = function (roomId, nights) {
        var room = this.rooms.filter(function (r) { return r.id === roomId; })[0];
        if (!room) {
            return "Error: Room does not exist.";
        }
        if (!room.isAvailable) {
            return "Error: Room is not available.";
        }
        room.isAvailable = false;
        var totalCost = room.pricePerNight * nights;
        return "Success: ".concat(room.id, " has been booked for ").concat(nights, " nights. Total cost: $").concat(totalCost, ".");
    };
    Hotel.prototype.cancelBooking = function (roomId) {
        var room = this.rooms.filter(function (r) { return r.id === roomId; })[0];
        if (!room) {
            return "Error: Room does not exist.";
        }
        if (room.isAvailable) {
            return "Error: Room is not booked.";
        }
        room.isAvailable = true;
        return "Success: Booking for ".concat(room.id, " has been canceled.");
    };
    return Hotel;
}());
var hotel = new Hotel([
    { id: "Room-101", type: "Single", pricePerNight: 100, isAvailable: true },
    { id: "Room-102", type: "Double", pricePerNight: 150, isAvailable: true },
    { id: "Room-103", type: "Suite", pricePerNight: 250, isAvailable: true },
]);
hotel.displayRooms();
console.log(hotel.checkAvailability("Room-101") ? "Room-101 is available." : "Room-101 is not available.");
console.log(hotel.bookRoom("Room-101", 3));
hotel.displayRooms();
console.log(hotel.cancelBooking("Room-101"));
hotel.displayRooms();
console.log(hotel.bookRoom("Room-102", 2));
hotel.displayRooms();
