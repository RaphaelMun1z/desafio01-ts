export abstract class DioAccount {
	private readonly name: string;
	private readonly accountNumber: number;
	private balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	getName = (): string => {
		return this.name;
	};

	deposit(amount: number): void {
		if (this.validateStatus()) {
			this.balance += amount;
			console.log("Voce depositou");
		}
	}

	withdraw = (amount: number): void => {
		if (this.validateStatus() && this.enoughtBalance(amount)) {
			this.balance -= amount;
			console.log("Voce sacou");
		}
	};

	enoughtBalance = (amount: number): boolean => {
		return this.balance >= amount;
	};

	getBalance = (): void => {
		console.log(this.balance);
	};

	protected validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error("Conta inválida");
	};
}
