# GLB Editor

- Drag and drop Glb files to view and edit with threejs

I created this as a way to have all of my favourite features from the online threejs editor and model-viewer editor in one place. As well as to quickly test glb files and textures within an enviroment that is easily customised.

## Demo 

- Demo hosted on [Vercel](https://glb-edior.vercel.app/)
## Set-up

- Git clone this repo
```bash
  $ git clone git@github.com:S-Brand5136/GLB-Edior.git
```

- Inside of your terminal, move into root directory, and run npm install followed by npm run start

```bash
  $ cd ./GLB-Editor
  $ npm i
  $ npm run start
```

- Open up browser and go to localhost:3000


## Todo List
- A list of all the features to be added

  ### Uploading
  - [] Add support for compressed files (KTX2, Draco)
  - [] Add support for OBJ, MMD, MTLL
  - [] Add more descriptive error messages for loading failure

  ### Unit Tests
  - File uplodaing
  - Panes
  - Exporting

#### Referances
- [Tree classes](https://www.30secondsofcode.org/articles/s/js-data-structures-tree)
- [drag & drop](https://gltf-viewer.donmccurdy.com/)
- [javascript yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)