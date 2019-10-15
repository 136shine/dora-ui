# Spin 加载中

用于页面和区块的加载中状态。

## 示例

### 基本使用

```jsx
import Spin from '../../components/spin';
import '../../components/spin/style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <div>
          <Spin spinning={loading}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora illum soluta,
              ipsum quod libero reiciendis consequuntur incidunt ipsa pariatur, quaerat eligendi.
              Commodi earum quos culpa animi, libero minima eligendi!
            </p>
          </Spin>
        </div>
        <button onClick={this.toggleLoading}>显示 或 隐藏</button>
      </div>
    );
  }
}
```

### 全屏加载

在包裹元素高度大于一屏时推荐使用全屏加载，默认关闭`fullScreen=false`

```jsx
import Spin from '../../components/spin';
import '../../components/spin/style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      full: false
    };

    this.showFullScreen = this.showFullScreen.bind(this);
  }

  showFullScreen() {
    this.setState(
      {
        loading: true,
        full: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 2000);
      }
    );
  }

  render() {
    const { loading, full } = this.state;
    return (
      <div>
        <div>
          <Spin spinning={loading} fullScreen={full}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora illum soluta,
              ipsum quod libero reiciendis consequuntur incidunt ipsa pariatur, quaerat eligendi.
              Commodi earum quos culpa animi, libero minima eligendi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptas qui, a
              incidunt porro doloremque magni debitis dolorem quo deleniti quas, at nemo nisi. Earum
              voluptate libero in modi possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut voluptates cupiditate
              odio atque alias, aspernatur qui! Porro ad nesciunt totam reiciendis minima, quas sit
              veniam excepturi a, asperiores autem!
            </p>
          </Spin>
        </div>
        <button onClick={this.showFullScreen}>全屏加载</button>
      </div>
    );
  }
}
```

### 关闭过渡效果

可关闭带有过渡动画效果 fade，默认开启`transition=true`

```jsx
import Spin from '../../components/spin';
import '../../components/spin/style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      transition: true
    };
  }

  defaultClick = () => {
    this.setState(
      {
        loading: true,
        transition: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 2000);
      }
    );
  };

  closeTransition = () => {
    this.setState(
      {
        loading: true,
        transition: false
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 2000);
      }
    );
  };

  render() {
    const { loading, transition } = this.state;
    return (
      <div>
        <div>
          <Spin spinning={loading} transition={transition}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora illum soluta,
              ipsum quod libero reiciendis consequuntur incidunt ipsa pariatur, quaerat eligendi.
              Commodi earum quos culpa animi, libero minima eligendi!
            </p>
          </Spin>
        </div>
        <button onClick={this.defaultClick}>默认过渡效果</button>
        <button onClick={this.closeTransition}>关闭过渡效果</button>
      </div>
    );
  }
}
```

### 切换 Spinner 大小

只对默认 Spinner 有效，自定义 Spinner 的话对 tip 有效，对自定义 Spinner 无效，默认`size="md"`

```jsx
import Spin from '../../components/spin';
import '../../components/spin/style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      size: 'md'
    };
  }

  changeSize = () => {
    const sizeArr = ['sm', 'md', 'lg'];
    const { size } = this.state;
    const index = sizeArr.indexOf(size);
    const nextIndex = index + 1 === sizeArr.length ? 0 : index + 1;
    this.setState({
      size: sizeArr[nextIndex],
      loading: true
    });
  };

  render() {
    const { loading, size } = this.state;
    return (
      <div>
        <div>
          <Spin spinning={loading} size={size} tip="正在加载">
            <h2>标题</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora illum soluta,
              ipsum quod libero reiciendis consequuntur incidunt ipsa pariatur, quaerat eligendi.
              Commodi earum quos culpa animi, libero minima eligendi!
            </p>
          </Spin>
        </div>
        <button onClick={this.changeSize}>切换大小（连续点击）</button>
      </div>
    );
  }
}
```

### 自定义 Spinner

此处仅使用`react-spinners`库里的部分 spinner 作为演示，可以根据业务需求编写自己的 Spinner，默认 Spinner 为 Icon `type="loading"`组件

关于`react-spinners`，更多可查看https://www.react-spinners.com/

```jsx
import Spin from '../../components/spin';
import { BounceLoader, ClipLoader, ScaleLoader } from 'react-spinners';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      spinner: undefined
    };
    this.spinnerIndex = -1;
  }

  changeSpinner = () => {
    const spinners = [BounceLoader, ClipLoader, ScaleLoader]
      .map(Spinner => <Spinner color="#fff"></Spinner>)
      .concat(undefined);
    this.spinnerIndex = this.spinnerIndex + 1 === spinners.length ? 0 : this.spinnerIndex + 1;
    index = this.spinnerIndex;
    this.setState({
      spinner: spinners[index],
      loading: true
    });
  };

  render() {
    const { loading, spinner } = this.state;
    return (
      <>
        <div>
          <Spin spinning={loading} spinner={spinner}>
            <h2>标题</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora illum soluta,
              ipsum quod libero reiciendis consequuntur incidunt ipsa pariatur, quaerat eligendi.
              Commodi earum quos culpa animi, libero minima eligendi!
            </p>
          </Spin>
        </div>
        <button onClick={this.changeSpinner}>自定义Spinner（连续点击）</button>
      </>
    );
  }
}
```

### delay 延迟

延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。

常用于解决异步请求时间过短造成的闪烁。如设置为 1000ms，请求若在 1000ms 发送并的到响应，不会展示 Spinner

```jsx
import Spin from '../../components/spin';
import { BounceLoader, ClipLoader, ScaleLoader } from 'react-spinners';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <div>
          <Spin spinning={loading} delay={1000}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora illum soluta,
              ipsum quod libero reiciendis consequuntur incidunt ipsa pariatur, quaerat eligendi.
              Commodi earum quos culpa animi, libero minima eligendi!
            </p>
          </Spin>
        </div>
        <button onClick={this.toggleLoading}>显示 或 隐藏 delay=1000ms</button>
      </div>
    );
  }
}
```

## API

| 属性             | 说明                                               | 类型            | 默认值                  |
| ---------------- | -------------------------------------------------- | --------------- | ----------------------- |
| spinning         | 是否展示 Spin                                      | Boolean         | -                       |
| fullScreen       | 是否一屏（如果加载的内容高于一屏，建议设置此选项） | Boolean?        | false                   |
| children         | 被包裹的内容                                       | ReactNode       | -                       |
| tip              | 描述文案                                           | String?         | ''                      |
| spinner          | 自定义 Spinner                                     | ReactElement?   | `<Icon type="loading">` |
| size             | Spinner 大小，仅对默认 Spinner 有效                | 'sm'/'md'/'lg'? | 'md'                    |
| wrapperClassName | 包装器的类属性                                     | String?         | ''                      |
| prefixCls        | 包装器的类名前缀                                   | String?         | 'dora-spin'             |
| transition       | 是否展示过渡动画                                   | Boolean?        | true                    |
| delay            | 延迟显示加载效果的时间，毫秒                       | Number?         | 0                       |