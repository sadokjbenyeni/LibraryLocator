class OpeningTimes {
    days: string;
    opening: string;
    closing: string;
    closed: boolean;
}

export class Library {
    name: string;
    foundationDate: number;
    address: string;
    facilities: string[]
    phone: string;
    website: string;
    socialMedia: string[];
    portal: string;
    coords: number[];
    openingTimes: OpeningTimes[];
}