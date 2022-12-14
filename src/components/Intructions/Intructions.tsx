import './Intructions.css';

const Intructions: React.FC = () => {
  return(
    <section className='instruction'>
      <h2 className='instruction__title'>Инструкция</h2>
      <p className='instruction__text'>
        Альпа́ка, альпа́к (ранее альпака́; лат. Lama pacos, или Vicugna pacos),
        — домашнее мозоленогое животное, предположительно произошедшее от викуньи (вигони). 
        Разводят в высокогорном поясе Южной Америки (Анды). На сегодняшний день там обитает 
        около трёх миллионов альпак, большая часть из которых населяет Перу. Выращивают альпак 
        для стрижки шерсти, из которой делают тёплые и мягкие одеяла, пледы и одежду, а из меха 
        делают предметы для дома. Рост альпак не превышает одного метра в холке, их масса около 
        70 килограммов, они обладают мягким и длинным руном (по бокам его длина достигает 15—20 см). 
        Обитают в Андах на высоте 3500—5000 метров, на территории Эквадора, южного Перу, северного Чили и западной Боливии.
      </p>
    </section>
  );
};

export {Intructions};