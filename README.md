# GLB Editor

- Drag and drop Glb files to view mesh in react three fiber

## Demo 

- Demo hosted on [Vercel here](https://glb-edior.vercel.app/)

## Todo List
- A list of all the features to be added

### Uploading
  - [] Add support for compressed files (KTX2, Draco)
  - [] Add support for OBJ, MMD, MTLL
  - [] Add more descriptive error messages for loading failures
### Scene Pane
  - [x] Add menu to pick between each mesh loaded into scene
  - [x] Add drop down to change background color
  
  - Mesh editor Menu
    - Object Menu
      - [] Show Type
      - [] Text input for UUID
      - [] Text input for Name
      - [] Show Input group to change Position 
      - [] Show Input group to change Rotation 
      - [] Show Input group to change Scale 
      - [] Enable Shodow radio button
      - [] Visibility radio button

    - Material Menu
      - [] Upload Texture map
      - [] Upload Metal Map
      - [] Upload Roughness Map
      - [] Texture Colour picker window
      - [] Visibility radio button

### Export Pane

  - [] Add button to export scene 
  - [] Add menu for export settings
    - [] trs
    - [] only visible meshes
    - [] truncateDrawRange
    - [] binary
    - [] maxTextureSize
    - [] animations
    - [] forceIndicies
    - [] IncludeCustomExtensions
  - [] Possibily estimate file size?

### Settings Pane

  - View port
    -  [] Grid
  - [] Remove all items
  - [] Adjust lighting
    - [] overall brightness
    - [] individual lighting nodes

### Testing to add
  - File uplodaing
  - Panes
  - Exporting

#### Referances

- [Tree classes](https://www.30secondsofcode.org/articles/s/js-data-structures-tree)
- [drag & drop](https://gltf-viewer.donmccurdy.com/)
- [javascript yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)