import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Palette, Cpu, Code, Gauge, ChevronDown } from 'lucide-react';

interface AIItem {
  title: string;
  description: string;
}

interface AICategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: AIItem[];
  color: string;
}

const AIExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

  const categories: AICategory[] = [
    {
      title: t('aiAcceleration' as any),
      description: t('aiAccelerationDesc' as any),
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500/20 to-cyan-500/20',
      items: [
        {
          title: t('aiGeneration' as any),
          description: t('aiGenerationDesc' as any)
        },
        {
          title: t('aiDebugging' as any),
          description: t('aiDebuggingDesc' as any)
        },
        {
          title: t('aiDocumentation' as any),
          description: t('aiDocumentationDesc' as any)
        },
      ],
    },
    {
      title: t('aiCreative' as any),
      description: t('aiCreativeDesc' as any),
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500/20 to-pink-500/20',
      items: [
        {
          title: t('aiIdeas' as any),
          description: t('aiIdeasDesc' as any)
        },
        {
          title: t('aiFigmaClaudeIntegration' as any),
          description: t('aiFigmaClaudeIntegrationDesc' as any)
        },
        {
          title: t('aiPRReviewer' as any),
          description: t('aiPRReviewerDesc' as any)
        },
      ],
    },
    {
      title: t('aiProductivity' as any),
      description: t('aiProductivityDesc' as any),
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-green-500/20 to-emerald-500/20',
      items: [
        {
          title: t('aiSentryAutomation' as any),
          description: t('aiSentryAutomationDesc' as any)
        },
        {
          title: t('aiMCPIntegration' as any),
          description: t('aiMCPIntegrationDesc' as any)
        },
        {
          title: t('aiAlignmentApproach' as any),
          description: t('aiAlignmentApproachDesc' as any)
        },
      ],
    },
  ];

  const tools = [
    { name: t('aiClaude' as any), emoji: '🤖' },
    { name: t('aiGithubCopilot' as any), emoji: '⚡' },
    { name: t('aiChatGPT' as any), emoji: '💬' },
    { name: t('aiCodex' as any), emoji: '🔮' },
  ];

  const mcpIntegrations = [
    { name: t('aiSentryMCP' as any), emoji: '🚨' },
    { name: t('aiSignozMCP' as any), emoji: '📊' },
    { name: t('aiJiraMCP' as any), emoji: '📋' },
  ];

  return (
    <section id="ai" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 z-0"></div>

      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-500/10 px-6 py-2 rounded-full text-sm font-medium text-cyan-400 mb-6 border border-cyan-500/30">
            <span className="inline-block animate-float">🤖 AI & Automation</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              {t('aiTitle' as any)}
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            {t('aiDescription' as any)}
          </p>

          {/* Key Metric */}
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-sm text-gray-400">{t('aiImprovementPercent' as any)}</div>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">185K → 5</div>
              <div className="text-sm text-gray-400">{t('aiEventsAfter' as any)}</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Category Card */}
              <div
                onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
                className={`bg-gradient-to-br ${category.color} border border-gray-700/50 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-gray-600 ${
                  expandedCategory === idx ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gray-800/50 text-cyan-400 group-hover:text-purple-400 transition-colors`}>
                    {category.icon}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedCategory === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {category.description}
                </p>

                {/* Expanded Items */}
                {expandedCategory === idx && (
                  <div className="mt-6 space-y-4 border-t border-gray-700/50 pt-6 animate-pulse-fade">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-gray-900/50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Code className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-white text-sm">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            {t('aiTools' as any)}
          </h3>

          {/* AI Models & Platforms */}
          <div className="mb-12">
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider text-center mb-6">AI Models & Platforms</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {tool.emoji}
                  </div>
                  <p className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors font-medium">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MCP Integrations */}
          <div>
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider text-center mb-6">MCP Context Integrations</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {mcpIntegrations.map((integration, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-purple-900/30 to-gray-900 border border-purple-700/50 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {integration.emoji}
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-purple-300 transition-colors font-medium">
                    {integration.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Enhanced AI context & insights</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Sentry Achievement */}
          <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <Gauge className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('aiAchievement' as any)} #1
            </h3>

            {/* Before and After Comparison */}
            <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
              <div className="flex flex-col justify-center items-center gap-4">
                {/* Before */}
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Before</div>
                  <div className="text-4xl font-bold text-red-400 mb-2">185K</div>
                  <div className="text-sm text-gray-400">Sentry Error Events</div>
                </div>

                {/* Arrow */}
                <div className="text-2xl text-cyan-400">↓</div>

                {/* After */}
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">After 3 Months</div>
                  <div className="text-4xl font-bold text-green-400 mb-2">5</div>
                  <div className="text-xs text-green-500 font-semibold">AI Automation Achieved</div>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="text-xl font-bold text-cyan-400">99.99%</div>
                <div className="text-xs text-gray-400">Reduction</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="text-xl font-bold text-green-400">3mo</div>
                <div className="text-xs text-gray-400">Timeline</div>
              </div>
            </div>
          </div>

          {/* PR Review Achievement */}
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('aiAchievement' as any)} #2
            </h3>

            {/* PR Review Details */}
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider">
                  {t('aiPRReviewAchievement' as any)}
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  {t('aiPRReviewDesc' as any)}
                </p>

                {/* Features Grid */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-400 mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-white text-sm">Automated PR Analysis</div>
                      <div className="text-xs text-gray-500">Reviews code changes, files modified, and patterns</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-blue-400 mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-white text-sm">0-5 Scoring System</div>
                      <div className="text-xs text-gray-500">Quality assessment for each PR</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-green-400 mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-white text-sm">Production-Ready Gate (Score 5)</div>
                      <div className="text-xs text-gray-500">Only merge-ready PRs get the green light</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-blue-400 mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-white text-sm">Detailed Feedback</div>
                      <div className="text-xs text-gray-500">Comprehensive comments with suggestions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
                <div className="text-xs text-gray-400">Code Quality Consistency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-fade {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-fade {
          animation: pulse-fade 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AIExperienceSection;










