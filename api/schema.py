import os

from ariadne import load_schema_from_path, make_executable_schema, ObjectType

from api.resolvers import *

query = ObjectType("Query")
query.set_field("loginUser", resolve_login_user)
query.set_field("getUser", resolve_get_user)

mutation = ObjectType("Mutation")
mutation.set_field("createUser", resolve_create_user)

type_defs = load_schema_from_path(
    os.path.join(os.path.dirname(__file__), "schema")
)

schema = make_executable_schema(type_defs, query, mutation)

# print(schema.type_map)
