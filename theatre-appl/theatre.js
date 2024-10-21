var Theater = /** @class */ (function () {
    function Theater(totalSeats) {
        this.seats = [];
        for (var index = 0; index < totalSeats; index++) {
            this.seats.push({ id: index + 1, isBooked: true });
        }
    }
    Theater.prototype.displaySeats = function () {
        console.log("Current Seat Status:");
        this.seats.forEach(function (seat) {
            console.log("".concat(seat.id, ": ").concat(seat.isBooked ? 'Booked' : 'Available'));
        });
    };
    Theater.prototype.bookSeat = function (seatId) {
        var seat = this.seats.filter(function (s) { return s.id === seatId; })[0];
        if (!seat) {
            return "Error: Seat does not exist.";
        }
        if (seat.isBooked) {
            return "Error: Seat is already booked.";
        }
        seat.isBooked = true;
        return "Success: ".concat(seat.id, " has been successfully booked.");
    };
    Theater.prototype.cancelSeat = function (seatId) {
        var seat = this.seats.filter(function (s) { return s.id === seatId; })[0];
        if (!seat) {
            return "Error: Seat does not exist.";
        }
        if (!seat.isBooked) {
            return "Error: Seat is not booked.";
        }
        seat.isBooked = false;
        return "Success: ".concat(seat.id, " has been successfully canceled.");
    };
    Theater.prototype.getAvailableSeats = function () {
        return this.seats.filter(function (seat) { return !seat.isBooked; }).map(function (seat) { return seat.id; });
    };
    Theater.prototype.checkFull = function () {
        return this.seats.every(function (seat) { return seat.isBooked; });
    };
    return Theater;
}());
var theater = new Theater(10);
theater.displaySeats();
console.log(theater.bookSeat(1));
console.log(theater.bookSeat(2));
console.log("Available seats:", theater.getAvailableSeats());
theater.displaySeats();
console.log(theater.cancelSeat(1));
theater.displaySeats();
console.log(theater.bookSeat(1));
console.log("Is theater full?", theater.checkFull() ? "Yes" : "No");
for (var i = 3; i <= 10; i++) {
    console.log(theater.bookSeat(i));
}
theater.displaySeats();
console.log("Is theater full?", theater.checkFull() ? "Yes" : "No");
