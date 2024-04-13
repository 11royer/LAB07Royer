export const WapperList = props => {
  
    const { children } = props
  
    return (
      <div>
        <h2>Lista de Compras</h2>
        <div>
          { children }
        </div>
      </div>
    )
  }