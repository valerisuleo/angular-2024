import { isPlatformServer } from '@angular/common';
import {
    Injectable,
    Inject,
    PLATFORM_ID,
    TransferState,
    makeStateKey,
} from '@angular/core';

@Injectable()
export class StateTransferService {
    constructor(
        // eslint-disable-next-line @typescript-eslint/ban-types
        @Inject(PLATFORM_ID) private platformId: Object,
        private state: TransferState
    ) {}

    public hasKey<T>(key: string): boolean {
        const transferKey = makeStateKey<T>(key);
        return this.state.hasKey(transferKey);
    }

    public get<T>(key: string, defaultValue: T): T {
        const transferKey = makeStateKey<T>(key);
        return this.state.get(transferKey, defaultValue);
    }
    
    public set<T>(key: string, data: T): void {
        if (isPlatformServer(this.platformId)) {
            const transferKey = makeStateKey<T>(key);
            this.state.set(transferKey, data);
        }
    }

    public remove<T>(key: string): void {
        const transferKey = makeStateKey<T>(key);
        if (this.state.hasKey(transferKey)) {
            this.state.remove(transferKey);
        }
    }
}
