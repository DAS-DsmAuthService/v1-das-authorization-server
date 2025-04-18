import { ValueTransformer } from 'typeorm';
import { parse, stringify } from 'uuid';

export const UUID_TRANSFORMER: ValueTransformer = {
    to: (value: string): Buffer => Buffer.from(parse(value)),
    from: (value: Buffer): string => stringify(value),
};
