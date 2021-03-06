import { Readable } from "stream";

export const createReadStream = (max: number = 10) => {
    let count = 0;
    const stream = new Readable({
        objectMode: true,
        read() {
            if (count < max) {
                this.push(count);
            } else {
                this.push(null);
            }
            count++;
        }
    });

    return stream;
};
