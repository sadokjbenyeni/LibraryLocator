class OpeningTimes {
    days: string;
    opening: string;
    closing: string;
    closed: boolean;
}

class SocialMedia {
    facebook: string;
    youtube: string;
    wikipedia: string;
    other: string;
}

export class Library {
    name: string;
    foundationDate: number;
    address: string;
    facilities: string[];
    phone: string;
    website: string;
    socialMedia: SocialMedia;
    portal: string;
    coords: number[];
    openingTimes: OpeningTimes[];
}
