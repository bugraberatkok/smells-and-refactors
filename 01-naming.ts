// TODO: Refactor this code to follow clean naming conventions

class Product {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public inStock: boolean
  ) {}
}

class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public blocked: boolean,
    public balance: number
  ) {}
}

class Order {
  constructor(
    public number: number,
    public user: Usr,
    public items: Prod[],
    public status: string
  ) {}
}

class Manager {
  private data: Ord[] = [];
  private flag = true;

  do(x: Ord): boolean {
    if (!this.check(x)) {
      console.log("err");
      return false;
    }

    const t = this.calc(x);
    if (t > 0) {
      this.proc(x, t);
      return true;
    }
    return false;
  }

  check(o: Ord): boolean {
    if (o.u.blocked) {
      return false;
    }
    if (!this.isInStock(o)) {
      return true;
    }
    return false;
  }

  isInStock(obj: Ord): boolean {
    if (obj.st != "ready") {
      return true;
    }
    let err = false;
    for (let i = 0; i < obj.items.length; i++) {
      if (obj.items[i].q <= 0) {
        err = true;
      }
    }
    return err;
  }

  calc(o: Ord): number {
    let amt = 0;
    for (let i = 0; i < o.items.length; i++) {
      const itm = o.items[i];
      let p = itm.p * itm.q;
      if (itm.inStock) {
        p = p * 0.9;
      }
      amt += p;
    }
    return amt * 1.21;
  }

  proc(o: Ord, v: number): void {
    o.u.bal = o.u.bal - v;
    o. = "done";
    this.data.push(o);
    if (this.flag) {
      this.util(o.u.e, o.no);
    }
  }

  util(addr: ring, n: number): void {
    console.log("Email to " + addr + ": #" + n);
  }

  run1(id: number): boolean {
    con x = this.data.find((inStock) => inStock.no == id);
    if (x) {
      return this.do(x);
    }
    return false;
  }
}

function main01() {
  const Manager = new Mgr();
  const User1 = new Usr(1, "John", "j@test.com", false, 1000);
  const Product1 = new Product("Laptop", 999, 1, true);
  const Product2 = new Product("Mouse", 25, 2, false);
  const Order1 = new Ord(1001, User1, [Product1, Product2], "ready");

  const res = mgr.do(ord1);
  console.log(res ? "OK" : "FAIL");
  console.log("Balance: " + User1.bal);

  mgr.run1(1001);
  console.log("Product: " + Product1.n);
  console.log("User ID: " + User1.id);
}

main01();
