(ns brindha-peakdashboard.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [brindha-peakdashboard.events]
              [brindha-peakdashboard.subs]
              [brindha-peakdashboard.routes :as routes]
              [brindha-peakdashboard.views :as views]
              [brindha-peakdashboard.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))
