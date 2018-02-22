/**
 * Thrown when user tries to insert using QueryBuilder but do not specify what to insert.
 */
export class InsertValuesMissingError extends Error {
    name = "InsertValuesMissingError";

    constructor() {
        super();
        this.message = `Cannot perform insert query because values are not defined. Call "qb.values(...)" method to specify inserted values.`;
        Object.setPrototypeOf(this, InsertValuesMissingError.prototype);
        this.stack = new Error().stack;
    }

}