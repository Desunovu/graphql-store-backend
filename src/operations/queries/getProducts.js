import {gql} from "@apollo/react-hooks";

export const GET_PRODUCTS = gql`
    query GetProducts(
        $pagination: Pagination
        $sort: SortGetProducts
    ){
        getProducts(
            pagination: $pagination
            sort: $sort
        ){
            status
            errors {
                message
            }
            products {
                id
                name
                price
                amount
                reserved
                description
                categories {
                    id
                    name
                }
                images {
                    url
                }
                reviews {
                    text
                }
                characteristics {
                    characteristicName
                    value
                }
            }
        }
    }
`