import React from 'react'
import Progressbar from './progress_bar_function'
import './botao.scss'


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formsSchema } from './formsSchema';


//import {useSelector,useDispatch} from "react-redux";
//import {nextStep,prevStep, setCep,setLogradouro,setCompEnd,setBairro,setInstrucao_pedido,setNumEnd} from '../../redux/compra/compraSlice'

function setupendereco_function({ prevStep, nextStep, step }) {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        //a
        console.log(data)
      }
      const handleSubmitStep=data=>{
        nextStep();
        handleSubmit(data)();
      }

    /*
    const { step,cep,logradouro,numEnd,bairro,CompEnd,instrucao_pedido} = useSelector((rootReducer) => rootReducer.compraReducer);
    const dispatch = useDispatch();

    const handleCep = input => (e) => {
        dispatch(setCep(e.target.value))
    }
    const handleLogradouro = input => (e) => {
        dispatch(setLogradouro(e.target.value))
    }
    const handleCompEnd = input => (e) => {
        dispatch(setCompEnd(e.target.value))
    }
    const handleBairro = input => (e) => {
        dispatch(setBairro(e.target.value))
    }
    const handleInstrucao_pedido = input => (e) => {
        dispatch(setInstrucao_pedido(e.target.value))
    }
    const handleNumEnd = input => (e) => {
        dispatch(setNumEnd(e.target.value))
    }
    const continue_event = (e) => {
        e.preventDefault();
        dispatch(nextStep());
      }
      const back_event = (e) => {
        e.preventDefault();
        dispatch(prevStep());
      }
      */


    return (
        <>
            <div className='position-relative pt-2'>
                <Progressbar step={step} />
            </div>


            <div className='container-fluid'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}> {/* HOOKFORM ONSUBMIT */}
                    <div className="align-items-center row bg-banana-mania text-center m-5 ">
                        <h3>Endereço</h3>
                        <hr />
                        <div className='form-container'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label htmlFor='cep'>CEP</label>
                                    <input type='text' className='form-control' id="cep" name='cep'{...register('cep')} />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor='logradouro'>Logradouro</label>
                                    <input type='text' className='form-control' id="logradouro" name='logradouro'{...register('logradouro')} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label htmlFor='numEnd'>Número</label>
                                    <input type='text' className='form-control' id='numEnd' name='numEnd' {...register('numEnd')} />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor='CompEnd'>Bairro</label>
                                    <input type='text' className='form-control' id='bairro' name='bairro' {...register('bairro')} />
                                </div>
                                <div className='col-md-12 p-2'>
                                    <label htmlFor='CompEnd'>Complemento</label>
                                    <input type='text' className='form-control' id='CompEnd' name='CompEnd' {...register('CompEnd')} />
                                </div>
                                <div className='p-1'>
                                    <hr />
                                </div>
                                <div className='col-md-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Instruções de Entrega</label>
                                        <textarea className="form-control" name='instrucao_pedido' {...register('instrucao_pedido')} id="exampleFormControlTextarea1" rows="1"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='form-container'>
                            <div className='row align-items-center'>
                                <div className='col-md-6 pb-3'>
                                    <button className='btn btn-padrao bg-tacao-300' onClick={() => prevStep()}>Anterior</button>
                                </div>
                                <div className='col-md-6 pb-3'>
                                    <button className='btn btn-padrao bg-tacao-300' onClick={() =>handleSubmitStep(onSubmit)}>Próximo</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default setupendereco_function