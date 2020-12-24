Queries for the Graphql Documentation

----------------------------------------------------------

Order(id: ID!): Order

query {
  Order(id: "ckhd3ojw1000101l4cqyc93vn") {
    id
    handle
    userId
    billingEmail
    billingName
    billingCompany
    billingAddress
    billingCity
    billingPostCode
    billingState
    billingCountry
    shippingName
    shippingCompany
    shippingAddress
    shippingCity
    shippingPostCode
    shippingState
    shippingCountry
    shippingDate
    createdAt
    updatedAt
  }
}

----------------------------------------------------------

OrderLine(id: ID!): OrderLine

query {
  	OrderLine(id:"ckhd41hqa000701l49szfeba9") {
    id
    orderId
    orderLineId
  }
}

----------------------------------------------------------

OrderLineList(id: ID!): OrderLineList

query {
  OrderLineList(id:"ckhd41z1i000901l4fe2b4xw7") {
    id
    productId
    title
    type
    unit
    unitSize
    bulkUnit
    bulkSize
    price
    quantity
  }
}

----------------------------------------------------------

User(id: ID!): User

query {
  User(id:"ckf2aggbo000101ji0cs6hovq") {
    id
    name
    role

  }
}

----------------------------------------------------------

Product(id: ID!): Product

query {
  Product(id:"ckes849yz000101md82djen90") {
    id
    producerId
    title
    type
    image
    category
    unit
    unitSize
    bulkUnit
    bulkSize
    price
  }
}

----------------------------------------------------------