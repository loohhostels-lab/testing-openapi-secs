import { OpenAPIRegistry, OpenApiGeneratorV3, extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

import { addUserSchema, getUser } from "./index";

export const registry = new OpenAPIRegistry();

registry.register("GetUser", getUser);
registry.register("AddUserRequest", addUserSchema);


const generator = new OpenApiGeneratorV3(registry.definitions);

export const document = generator.generateDocument({
    openapi: "3.0.0",
    info: {
        title: "Looh API",
        version: "1.0.0"
    }
})