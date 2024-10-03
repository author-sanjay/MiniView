# React Responsive Preview

`ReactResponsivePreview` is a flexible React component designed to help you preview content in various screen sizes within a confined container. This package can scale any target resolution (width/height) to fit within a container, while allowing users to pass custom content (children), including images, videos, or even React components.

## Features

- Automatically scales content to fit any container size (in `px`, `vh`, or `vw`).
- Supports any target resolution, such as screen sizes (e.g., `1920x1080`, `1280x720`).
- Allows passing custom content via React `children`.
- Responsive across all devices and containers.
- Easy to use with customizable properties.

## Installation

To install the package from npm:

```bash
npm install react-responsive-preview
```

Or with yarn:
```bash
yarn add react-responsive-preview
```

### How It Works (Theory)
The core idea behind ReactResponsivePreview is scaling a preview of content to fit within a defined container, no matter the target resolution or size. It achieves this by calculating a scale factor based on the ratio between the target width/height and the container width/height.

- Scale Calculation: We compute the horizontal (scaleX) and vertical (scaleY) scaling factors:
``` javascript
const scaleX = containerWidth / targetWidth;
const scaleY = containerHeight / targetHeight;
```
We then use the smaller of the two (Math.min(scaleX, scaleY)) to ensure the content fits within the container without overflowing.

- Flexible Containers: The container dimensions can be passed in px, vh, or vw. The component checks whether the user prefers to size the container in pixels, viewport height, or viewport width, and calculates the appropriate container size based on this.

- Custom Content: The component accepts children as a prop, meaning you can pass any valid React components or HTML elements (like images or videos), which will be scaled inside the preview area.

## Usage
### Basic Usage
```javascript
import React from 'react';
import ReactResponsivePreview from 'react-responsive-preview';

const App = () => (
  <div>
    <h1>Responsive Preview Example</h1>

    <ReactResponsivePreview 
      targetWidth={1180} 
      targetHeight={820}
    >
      <img src="path_to_image.jpg" alt="Preview Image" style={{ width: '100%', height: '100%' }} />
    </ReactResponsivePreview>
  </div>
);

export default App;

```

#### Props
- targetWidth (required): The width (in pixels) of the target screen or resolution you're previewing.
- targetHeight (required): The height (in pixels) of the target screen or resolution you're previewing.
- containerWidth (optional): The width of the preview container. Can be in px, vh, or vw. Defaults to 100vh.
- containerHeight (optional): The height of the preview container. Can be in px, vh, or vw. Defaults to 80vh.
- isSizePx (optional): A boolean indicating if the container width/height is provided in pixels (px). Defaults to false.
- isSizeVh (optional): A boolean indicating if the container width/height is provided in viewport height (vh). Defaults to true.
- isSizeVw (optional): A boolean indicating if the container width/height is provided in viewport width (vw). Defaults to false.
- children (optional): Any valid React component or HTML content that you want to render inside the preview area.

### Full Example
Here’s a complete example that shows how you can render an image, video, and custom JSX content inside the responsive preview component:
```javascript
import React from 'react';
import ReactResponsivePreview from 'react-responsive-preview';

const App = () => (
  <div>
    <h1>Responsive Preview Examples</h1>

    {/* Example with an image */}
    <ReactResponsivePreview 
      targetWidth={1180} 
      targetHeight={820}
      containerWidth={100} // in vh
      containerHeight={80} // in vh
      isSizeVh={true}
    >
      <img src="path_to_image.jpg" alt="Preview Image" style={{ width: '100%', height: '100%' }} />
    </ReactResponsivePreview>

    {/* Example with a video */}
    <ReactResponsivePreview 
      targetWidth={1180} 
      targetHeight={820}
      containerWidth={1200} // in px
      containerHeight={900} // in px
      isSizePx={true}
    >
      <video controls style={{ width: '100%', height: '100%' }}>
        <source src="path_to_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </ReactResponsivePreview>

    {/* Example with custom JSX content */}
    <ReactResponsivePreview 
      targetWidth={1180} 
      targetHeight={820}
      containerWidth={90} // in vw
      containerHeight={70} // in vw
      isSizeVw={true}
    >
      <div style={{ backgroundColor: 'lightblue', width: '100%', height: '100%' }}>
        <h2>Custom Content</h2>
        <p>This is a custom component rendered inside the responsive preview.</p>
      </div>
    </ReactResponsivePreview>
  </div>
);

export default App;

```
#### CSS (Preview.css)
The following CSS file should be created to style the container and the preview content:
``` css
/* Preview.css */
.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.preview-content {
  position: relative;
  display: block;
}

.preview-item {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

```
### Customizing
Feel free to customize the CSS based on your application's needs to better suit your design system or layout requirements.

## Contributing
We welcome contributions! If you'd like to improve this package, feel free to open issues or submit PRs on our GitHub repository.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

This version is ready to be included as the `README.md` for your project on GitHub. It explains the component functionality, installation, usage, and how to configure the preview component.
