import { Content, fetchOneEntry } from '@builder.io/sdk-react'
import { customComponents } from '@/components/builder/registry'
import { notFound } from 'next/navigation'

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!

interface PageProps {
  params: Promise<{ page?: string[] }>
}

export default async function BuilderPage({ params }: PageProps) {
  const resolvedParams = await params
  const urlPath = '/' + (resolvedParams.page?.join('/') || '')

  // Skip catch-all for /form route (handled by dedicated route)
  if (urlPath === '/form') {
    notFound()
  }

  const content = await fetchOneEntry({
    model: 'page',
    apiKey: BUILDER_API_KEY,
    options: {
      query: {
        'data.url': urlPath,
      },
    },
  })

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">No content found for path: {urlPath}</p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
          <h2 className="text-lg font-semibold mb-3">Getting Started:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Go to <a href="https://builder.io" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">builder.io</a></li>
            <li>Create a new page with URL path: <code className="bg-gray-100 px-2 py-1 rounded">{urlPath}</code></li>
            <li>Add content using the visual editor</li>
            <li>Publish and refresh this page</li>
          </ol>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Or visit <a href="/form" className="text-blue-600 hover:underline">/form</a> to see the lead form
        </p>
      </div>
    )
  }

  return (
    <div suppressHydrationWarning>
      <Content
        content={content}
        model="page"
        apiKey={BUILDER_API_KEY}
        customComponents={customComponents}
      />
    </div>
  )
}
