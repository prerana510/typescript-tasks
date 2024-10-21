
interface Seat {
    id: number;
    isBooked: boolean;
}

class Theater {
    private seats: Seat[];

    constructor(totalSeats: number) {
        this.seats = [];
        for(let index = 0; index < totalSeats; index++) {
            this.seats.push({ id: index+1, isBooked: true });
        }
    }

    public displaySeats(): void {
        console.log("Current Seat Status:");
        this.seats.forEach(seat => {
            console.log(`${seat.id}: ${seat.isBooked ? 'Booked' : 'Available'}`);
        });
    }

    public bookSeat(seatId: number): string {
        const seat = this.seats.filter(s => s.id === seatId)[0];
        if (!seat) {
            return "Error: Seat does not exist.";
        }
        if (seat.isBooked) {
            return "Error: Seat is already booked.";
        }
        seat.isBooked = true;
        return `Success: ${seat.id} has been successfully booked.`;
    }

    public cancelSeat(seatId: number): string {
        const seat = this.seats.filter(s => s.id === seatId)[0];
        if (!seat) {
            return "Error: Seat does not exist.";
        }
        if (!seat.isBooked) {
            return "Error: Seat is not booked.";
        }
        seat.isBooked = false;
        return `Success: ${seat.id} has been successfully canceled.`;
    }

    public getAvailableSeats(): number[] {
        return this.seats.filter(seat => !seat.isBooked).map(seat => seat.id);
    }

    public checkFull(): boolean {
        return this.seats.every(seat => seat.isBooked);
    }
}

const theater = new Theater(10); 

theater.displaySeats();

console.log(theater.bookSeat(1)); 
console.log(theater.bookSeat(2)); 

console.log("Available seats:", theater.getAvailableSeats());

theater.displaySeats();

console.log(theater.cancelSeat(1));
theater.displaySeats();

console.log(theater.bookSeat(1)); 

console.log("Is theater full?", theater.checkFull() ? "Yes" : "No");

for (let i = 3; i <= 10; i++) {
    console.log(theater.bookSeat(i));
}

theater.displaySeats();
console.log("Is theater full?", theater.checkFull() ? "Yes" : "No");
