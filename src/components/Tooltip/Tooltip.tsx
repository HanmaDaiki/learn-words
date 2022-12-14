import './Tooltip.css';

interface TooltipProps {
  title: string,
  isOpen: boolean,
  onClose: () => void,
  difficulty: number,
  children: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ difficulty, isOpen, onClose, children, title }) => {
  return(
    <>
      {
        isOpen ? 
        <div className="tooltip">
          <div className='overlay' onClick={onClose}></div>
          <div className='tooltip__content'>
            <div className='tooltip__close' onClick={onClose}></div>
            <p className='tooltip__title'>{title}</p>
            {children}
            <p className='tooltip__difficulty'>Текущая сложность: {difficulty}</p>
          </div>
        </div> :
        <></>
      }
    </>
  )
};

export { Tooltip }