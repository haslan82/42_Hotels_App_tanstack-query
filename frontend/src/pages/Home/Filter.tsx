import { cityOpt } from "../../constant"


const Filter = () => {
  return (
    <form className='lg: mt-28 flex flex-col gap-4 lg:gap-10'>
      <div className='flex flex-col gap-2'>
        <label className='font-bold'>Nereye ?</label>
        <select className='border px-4 py-1 rounded-md' >
          <option value="">Seçiniz</option>
          {cityOpt.map((opt,key)=><option></option>)}
        </select>
      </div>
     
     
      <div className='flex flex-col gap-2'>
        <label className='font-bold'>Konaklama yeri adına göre ara</label>
        <input placeholder='ör: Seaside Villa' type='text' className='border px-4 py-1 rounded-md' >
         
        </input>
      </div>


      <div className='flex flex-col gap-2'>
        <label className='font-bold'>Sıralama Ölçütü</label>
        <select className='border px-4 py-1 rounded-md' >
          <option value="">Seçiniz</option>
        </select>
      </div>
<div className="flex justify-end">
  <button type="reset" className="bg-blue-500 p-1 text-white rounded-md w-fit">Filtreleri Temizle</button>
</div>
    </form>
  )
}

export default Filter
