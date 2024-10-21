interface Room {
    id: string;
    type: string;
    pricePerNight: number;
    isAvailable: boolean;
}

class Hotel {
    private rooms: Room[];

    constructor(rooms: Room[]) {
        this.rooms = rooms;
    }

    
    public displayRooms(): void {
        console.log("Available Rooms:");
        this.rooms.forEach(room => {
            console.log(`${room.id} - Type: ${room.type}, Price per Night: $${room.pricePerNight}, Available: ${room.isAvailable}`);
        });
    }

    public checkAvailability(roomId: string): boolean {
        const room = this.rooms.filter(r => r.id === roomId)[0];
        return room ? room.isAvailable : false;
    }

    public bookRoom(roomId: string, nights: number): string {
        const room = this.rooms.filter(r => r.id === roomId)[0];
        if (!room) {
            return "Error: Room does not exist.";
        }
        if (!room.isAvailable) {
            return "Error: Room is not available.";
        }
        room.isAvailable = false; 
        const totalCost = room.pricePerNight * nights;
        return `Success: ${room.id} has been booked for ${nights} nights. Total cost: $${totalCost}.`;
    }

    public cancelBooking(roomId: string): string {
        const room = this.rooms.filter(r => r.id === roomId)[0];
        if (!room) {
            return "Error: Room does not exist.";
        }
        if (room.isAvailable) {
            return "Error: Room is not booked.";
        }
        room.isAvailable = true; 
        return `Success: Booking for ${room.id} has been canceled.`;
    }
}

const hotel = new Hotel([
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
