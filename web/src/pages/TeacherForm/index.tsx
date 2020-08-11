import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm(){
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Que incrivel você quer dar aulas."> 
                <h4>
                    O primeiro passo, é prencher esse formulario de inscrição.
                </h4>
                <article id="search-teacher-form">
                    

                    <form id="search-teacher">
                        <h1>Seus dados</h1>

                        <div className="input-block">
                            <label htmlFor="name">Nome completo</label>
                            <input type="text" id="name" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="linkImg">Link da sua foto</label>
                            <input type="text" id="linkImg" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text" id="whatsapp" />
                        </div>
                    </form>
                </article>
               
           </PageHeader>
        </div>
    )
}

export default TeacherForm;