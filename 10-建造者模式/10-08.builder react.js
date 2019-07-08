/**
 * 模块: 建造者模式
 * 作者: SHERlocked93
 * 功能: 重构react组件形式
 */

export const ComponentBuilder = (displayName = 'Component') => {
    let _render, _componentDidMount, _propTypes, _mapStateToProps, _mapDispatchToProps
    
    const builder = {
        render: renderFn => {
            _render = renderFn
            return builder
        },
        propTypes: types => {
            _propTypes = types
            return builder
        },
        componentDidMount: didMountFn => {
            _componentDidMount = didMountFn
            return builder
        },
        mapStateToProps: statePropsFn => {
            _mapStateToProps = statePropsFn
            return builder
        },
        mapDispatchToProps: dispatchPropsFn => {
            _mapDispatchToProps = dispatchPropsFn
            return builder
        },
        build: () => {
            if (!_render) {
                throw new Error('Component render method required')
            }
            
            // noinspection JSRedeclarationOfBlockScope
            let Comp
            if (!_componentDidMount) {
                // Without lifecycle methods, component can just be a pure function
                Comp = _render
            } else {
                Comp = class extends Component {
                    render() {
                        return _render(this.props)
                    }
                    
                    componentDidMount() {
                        if (_componentDidMount) _componentDidMount(this.props)
                    }
                }
            }
            
            Comp.propTypes = _propTypes || {}
            Comp.displayName = displayName
            
            if (_mapStateToProps || _mapDispatchToProps) {
                // If redux methods are provided, connect to store
                return connect(_mapStateToProps, _mapDispatchToProps)(Comp)
            }
            
            return Comp
        }
    }
    
    return builder
}
