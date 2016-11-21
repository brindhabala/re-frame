(ns brindha-peakdashboard.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [brindha-peakdashboard.core-test]))

(doo-tests 'brindha-peakdashboard.core-test)
