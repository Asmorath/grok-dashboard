import { useState, useEffect } from 'react';
import SceneEditor from './components/SceneEditor';
import FinalFrameUploader from './components/FinalFrameUploader';
import VoiceoverManager from './components/VoiceoverManager';
import ProjectInfo from './components/ProjectInfo';
const App=()=>{const[projects,setProjects]=useState([]);useEffect(()=>{const saved=localStorage.getItem('grokProjects');if(saved)setProjects(JSON.parse(saved));},[]);
const saveProject=p=>{const u=[...projects,p];setProjects(u);localStorage.setItem('grokProjects',JSON.stringify(u));};
return(<div className='min-h-screen bg-gradient-to-br from-gray-900 to-black p-8'>
<header className='text-center mb-12'><h1 className='text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>Grok Video Production Dashboard</h1>
<p className='text-xl text-gray-400'>Scene Breakdown → Final Frames → Voiceover → Export</p></header>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
<ProjectInfo projects={projects}/><SceneEditor onSave={saveProject}/><FinalFrameUploader/><VoiceoverManager/></div></div>);};export default App;