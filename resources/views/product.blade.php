@extends('layout')

@section('title', 'トップページ')

@section('content')
    <div class="l-container">
        <h1>生産</h1>
        
        <div class="u-mt-3">
            <form action="">
                <div class="p-grid__product-container">

                    <label class="p-grid__label">
                        <p>品番</p>
                        <input type="text" class="p-form__text">
                    </label>
            
                    <div class="p-grid__product-amount">
                        <label class="p-grid__label"> 
                            <p>必要本数</p>
                            <input type="text" class="p-form__text" >
                        </label>
                
                        <label class="p-grid__label">
                            <p>本数</p>
                            <input type="text" class="p-form__text">
                        </label>
                    </div>
    
                    <label class="p-grid__label">
                        <p>現場名</p>
                        <input type="text" class="p-form__text">
                    </label>
    
                    <label class="p-grid__label">
                        <p>面状</p>
                        <input type="text" class="p-form__text">
                    </label>
    
                    <label class="p-grid__label">
                        <p>見本</p>
                        <select class="p-form__text">
                            <option>ロ</option>
                            <option>シ</option>
                            <option>大盤</option>
                            <option>板</option>
                        </select>
                    </label>
    
                    <label class="p-grid__label">
                        <p>見本写真</p>
                        <div class="p-grid__image">
                            <img class="p-image__sample-preview"/>
                            <p class="">写真をドロップしてください</p>
                        </div>
                    </label>
    
                    <button class="p-button__main" >登録</button>
                </div>
            </form>
        </div>
    </div>
@endsection