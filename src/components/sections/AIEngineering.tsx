import { FC } from 'react';
import { Bot, Server, FileSearch, MessageSquare, Cpu, Workflow } from 'lucide-react';
import Section from '../layout/Section';

const aiAreas = [
  {
    icon: Bot,
    title: 'Local LLM Deployment',
    description: 'Built an offline chatbot using Ollama for local LLM inference. Exploring llama.cpp for efficient on-device model serving.',
    status: 'Built & Exploring',
    evidence: 'Offline Chatbot project',
  },
  {
    icon: Cpu,
    title: 'Transformer Architecture',
    description: 'Implemented a Transformer sequence-to-sequence model from scratch in PyTorch — Multi-Head Attention, Positional Encoding, Encoder-Decoder, and Masked Attention.',
    status: 'Built',
    evidence: 'Transformers Model project',
  },
  {
    icon: MessageSquare,
    title: 'Prompt Engineering',
    description: 'Integrated Qwen AI for intelligent assistance in the Panchakarma therapy system. Practiced prompt design for LLM-powered chatbot interactions.',
    status: 'Practiced',
    evidence: 'Panchakarma & Chatbot projects',
  },
  {
    icon: FileSearch,
    title: 'Document Intelligence',
    description: 'Researching OCR workflows, document validation pipelines, and AI-assisted document processing for enterprise applications.',
    status: 'Researching',
    evidence: null,
  },
  {
    icon: Server,
    title: 'Retrieval-Augmented Generation',
    description: 'Researching RAG architectures for grounding LLM outputs with domain-specific knowledge retrieval using vector search.',
    status: 'Researching',
    evidence: null,
  },
  {
    icon: Workflow,
    title: 'Model Context Protocol',
    description: 'Exploring MCP as a standardized interface for connecting AI models with external tools and data sources.',
    status: 'Exploring',
    evidence: null,
  },
];

const statusColors: Record<string, string> = {
  'Built': 'badge-building',
  'Built & Exploring': 'badge-building',
  'Practiced': 'badge-exploring',
  'Exploring': 'badge-exploring',
  'Researching': 'badge-researching',
};

const AIEngineering: FC = () => {
  return (
    <Section id="ai-engineering" title="AI Engineering" subtitle="Work I've built, skills I'm practicing, and areas I'm actively researching.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiAreas.map((area) => {
          const Icon = area.icon;
          return (
            <div key={area.title} className="card card-hover p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-muted">
                  <Icon size={16} className="text-foreground" />
                </div>
                <span className={`chip text-[10px] ${statusColors[area.status]}`}>
                  {area.status}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-foreground mb-2">{area.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{area.description}</p>

              {area.evidence && (
                <p className="mt-3 text-[10px] text-muted-foreground/70 uppercase tracking-wider">
                  Evidence: {area.evidence}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default AIEngineering;
