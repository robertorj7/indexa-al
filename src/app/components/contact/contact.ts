export interface Contact {
    id: number;
    name: string;
    avatar: string | ArrayBuffer;
    phone: string;
    email: string;
    birthday?: string;
    socialMedia?: string;
    observations?: string;
}
