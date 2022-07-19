// require("icons/money.svg");
// require("icons/chart.svg");
// require("icons/tag.svg");

// import icons from "icons/money.svg"
// console.log("ddsw", icons); // import导入svg图片的话，这个是必须的，否则就会因为TreeShaking而找不到引入的icons

import classnames from 'classnames';
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

// 声明参数的类型，类似于java中的实体类
type Props = {
    name: string;
} & React.SVGAttributes<SVGElement>
const Icon = (props: Props) => {
    const { name, className, ...rest } = props;
    return (<svg className={classnames("icon", className)} {...rest}>
        {/*其中money是id，就等于文件名*/}
        <use xlinkHref={'#' + props.name}/>
    </svg>);
}

export { Icon }