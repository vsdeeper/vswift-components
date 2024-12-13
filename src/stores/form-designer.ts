import type { FormDesignData, WidgetDesignData } from '@/components'
import { defineStore } from 'pinia'

export default defineStore('form-designer', () => {
  const formDesignData = ref<FormDesignData>({
    form: {},
    widgetList: [],
  })
  const activeWidgetDesignData = ref<WidgetDesignData>()

  const setActiveWidgetDesignData = (data: WidgetDesignData) => {
    if (activeWidgetDesignData.value) {
      activeWidgetDesignData.value.__selected = false
    }
    data.__selected = true
    activeWidgetDesignData.value = data
  }

  return {
    formDesignData,
    activeWidgetDesignData,
    setActiveWidgetDesignData,
  }
})
