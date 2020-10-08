# Paviel

# PavielSQL

## Install

```
npm install paviel-sql
```

## Use

### Import

This is the main import. It helps you to send and receive data from your pavielsql server. To get started, pass your configuration options to create a new Jsonbox instance:

```
import { PavielSQL } from 'paviel-sql';
```

### Signatures

```
new PavielSQL(boxId: string);
```

### Examples

At minimum, you must provide a box ID:

```
const boxId = 'pavbox_emtg86f6b9mkc8h8ge';
const paivlebox = new PavielSQL(boxId);
```

Then you can object destructuring for easy use.

```
const {create, read, remove, update} = pavielbox;
```

## Create

```
const {create} = pavielbox;
```

### Signatures

```
create(record: object);
```

### Example

Create a record:

```
const todo = {title: 'Go to school'};
const result = await create(todo);

// result

{
  _id: '5e7ac65299ed160017dc2c81',
  title: 'Go to school',
  _createdOn: '2020-03-25T02:47:46.525Z'
}
```

## Read

```
const {read} = pavielbox;
```

### Signatures

```
read(id: string); // -> Promise resolving a record

read(); // -> Promise resolving an array of records
```

### Example

Read a single record by its ID:

```
const id = '5e7ac69799ed160017dc2c83';
const result = await read(id);

// result

{
  _id: '5e7ac69799ed160017dc2c83',
  name: 'Jacob',
  _createdOn: '2020-03-25T02:48:55.777Z',
}
```

Read all records:

```
const result = await read();

// result
[
  {
    _id: '5e7ac69799ed160017dc2c83',
    name: 'Jacob',
    _createdOn: '2020-03-25T02:48:55.777Z',
  },
  {
    _id: '5e7ac65299ed160017dc2c81',
    name: 'Alice',
    _createdOn: '2020-03-25T02:48:55.777Z',
  }
]
```

## Update

Update a record

```
const {update} = pavielbox;
```

### Signatures

```
update(id: string, record: object); // -> Promise resolving a record
```

### Example

```
const id = '5e7ac69799ed160017dc2c83';
const updateState = { name: 'Jacob' };
const result = await update(id, updateState);

// result

{
  message: 'Record updated.',
  before: {
    _id: '5e7ac697995e7ac69799ed16',
    name: 'Alice',
    _createdOn: '2020-03-25T02:48:55.777Z'
  }
  after: {
    _id: '5e7ac69799ed160017dc2c83',
    name: 'Jacob',
    _createdOn: '2020-03-25T02:48:55.777Z',
    _updatedOn: '2020-04-25T02:48:55.777Z',
  }
{
```

## Remove

Delete one or more records

```
const {remove} = pavielbox;
```

### Signatures

```
remove(id: string); // delete a singel record

remove(id: string[]); //delete multiple records in array
```

### Example

Delete a single record by its ID:

```
const id = '5e7ac69799ed160017dc2c83';
const result = await remove(id);

// result

{ message: 'Record deleted.' }
```

Delete multiple records by their IDs:

```
const ids = ['5e7ac69799ed160017dc2c83', '5e7ac697995e7ac69799ed16'];
const result = await remove(ids);

// result

{ message: '2 records deleted.' }
```
