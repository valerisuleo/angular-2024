## Checking client / server platform

Some stuff exist only inside the browser such as: *localstorage* or the *window*, ect...

if we do something like this:

```
  isLoggedIn() {
        const token = localStorage.getItem('token') ? true : false;
        return token;
    }
```


we'll got this err: `localstorage is not defined`


> How can we fix this?

We can inject the platform:

```
constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private service: TodosService,
    private ts: TransferState,
    private router: Router
) {}
```

now we can check if we are inside the client and to do that we can

```
import { isPlatformBrowser } from '@angular/common;

isLoggedIn() {
    if ((isPlatformBrowser(this.platformId)) {
        const token = localStorage.getItem('token') ? true : false;
        return token; 
    }
}

```



## How to reuse state?


Since we got the data already on our server, we want to prevent our app from making not necessary API calls.

> How can we do that?

1. We need to know if we are on the client/server side:

	```
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private service: TodosService,
        private ts: TransferState,
        private router: Router
    ) {}
	```

2. Because we want to save the state on the server side this time we import: `isPlatformServer`


	```
	import { isPlatformServer } from '@angular/common;
	
	constructor(private ts: TrasferState) {}
	
	    getDonuts() {
	        this.service.getAll
	        .subscribe((response: IDonut[]) => {
	            if (isPlatformServer(this.platformId)) {
	                // this.ts.set(key, value)
	                this.ts.set<IDonut[]>(makeStateKey('donuts), response)
	            }
	            this.donuts = response;
	        })
	    }
	```

3. Now we just need to check whether or not the data is already there:

	```
	ngOnInit() {
	    if (this.ts.hasKey(makeStateKey('donuts'))) {
	        this.donuts = this.ts.get(makeStateKey('donuts'), [])
	    } else {
	        getDonuts();
	    }
	}
	
	```
