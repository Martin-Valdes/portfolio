import React from 'react';
import {  ChipIcon, CheckCircleIcon} from "@heroicons/react/solid";
import { useTranslation } from 'react-i18next';

import './Skills.scss';

const Skills = () =>{

  const {t} = useTranslation();

  return (
    <div className='containerSkills'>
      <ChipIcon className="w-10 inline-block mb-4" />
        <h1>{t("skills")}</h1>
        <ul>
            <div className='groupContainer'>
                <li><CheckCircleIcon className="h-6 w-6 text-green-500" />JavaScript</li>
                <li><CheckCircleIcon className="h-6 w-6 text-green-500" />React</li>
                <li><CheckCircleIcon className="h-6 w-6 text-green-500" />Bootstrap</li>
                <li><CheckCircleIcon className="h-6 w-6 text-green-500" />Tailwind</li>
            </div>
            <div className='groupContainer'>
               <li><CheckCircleIcon className="h-6 w-6 text-green-500" />SCSS</li>
               <li><CheckCircleIcon className="h-6 w-6 text-green-500" />Firebase</li>
               <li><CheckCircleIcon className="h-6 w-6 text-green-500" />Node</li>
               <li><CheckCircleIcon className="h-6 w-6 text-green-500" />MongoDB</li> 
            </div>
        </ul>
    </div>
  )
}


export default Skills