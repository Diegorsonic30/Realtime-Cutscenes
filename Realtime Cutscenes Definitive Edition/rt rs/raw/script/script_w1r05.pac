PACx403L��p   @   (   (   �                               PACx402L��(   �      �  P   �  @   	            H       `                      �      ����    ����   �              �             ����   �              �            ����          8                          �              �            ����          �                         
      P      h                      �      ����    ����   �              �             ����                                            �      p                      �      ����    ����   �              �             ����   �              �            ����          P                          �              �            ����          �                         �              �            ����          �                         �                           ����          �                 	        �                       
   ����                        
           �                          ����          @                         �                          ����          p                                               	                                                                            
                                  	                            E%�P           �              �             iJT�          @              �              q���f                         �              Wo�-:          p              �              ���˂          �              �              �4l��          @              �              �5�ނ          �              �              �          `              �              ResL evel uaData w1r05_script w1r05_sequence 00 10 20 30 40 50 60 level lua     BINA210LP      DATA@                                         VLEH            -- クリア判定を行う条件を記述します。
function IsCleared()
  g_isCleared = (IsPlayingDiEventAll()) == 0
end


-- クリア判定前常に呼び出されます。
function OrderSequence()
  if (GetBlock()) == 0 then
    ChangeSavePermission("allow")
    SetObjStatus("GiantTower", 0, 0)
    SetObjStatus("GiantTower", 1, 0)
    SetObjStatus("GiantTower", 2, 0)
    SetObjStatus("GiantTower", 3, 0)
    SetObjStatus("GiantTower", 4, 0)
    SetObjStatus("GiantTower", 5, 0)
    LoadDiEvent("ev4105")
    LoadDiEvent("ev4110")
    SetLayerEnabledInEvent("w1r05_plan_common", false)
    PlayDiEvent("ev4105")
    PlayDiEvent("ev4110")
    while not((IsPlayingDiEventAll()) == 0) do
    coroutine.yield(0)
    end
  end
  StartClearCheck()
end


-- クリア判定後、NextSequence()が呼び出されるまで常に呼び出されます。
function ClearedSequence()
  NextBlock(0)
  AutoSave("forceimmediate")
  NextSequence(10)
end
             -- クリア判定を行う条件を記述します。
function IsCleared()
  g_isCleared = (IsPlayingDiEventAll()) == 0
end


-- クリア判定前常に呼び出されます。
function OrderSequence()
  if (GetBlock()) == 0 then
    ActivityStart(3)
    ActivityTaskStart(3, 0)
    ShowQuestTarget('ev4900_010')
    while not((GetClearTowerNum()
    ) == 1) do
    coroutine.yield(0)
    end
    ClearQuestTarget()
    SetLayerEnabledInEvent("w1r05_plan_common", false)
    LoadDiEvent("ev4010")
    PlayDiEvent("ev4010")
    while not((IsPlayingDiEventAll()) == 0) do
    coroutine.yield(0)
    end
    ActivityTaskComplete(3, 0)
    NextBlock(1)
    AutoSave("forceimmediate")
  end
  if (GetBlock()) == 1 then
    ActivityTaskStart(3, 1)
    ShowQuestTarget('ev4900_020')
    while not((GetClearTowerNum()
    ) == 2) do
    coroutine.yield(0)
    end
    ClearQuestTarget()
    SetLayerEnabledInEvent("w1r05_plan_common", false)
    LoadDiEvent("ev4015")
    PlayDiEvent("ev4015")
    LoadDiEvent("ev4020")
    PlayDiEvent("ev4020")
    while not((IsPlayingDiEventAll()) == 0) do
    coroutine.yield(0)
    end
    ActivityTaskComplete(3, 1)
    NextBlock(2)
    AutoSave("forceimmediate")
  end
  if (GetBlock()) == 2 then
    ActivityTaskStart(3, 2)
    ShowQuestTarget('ev4900_030')
    while not((GetClearTowerNum()
    ) == 3) do
    coroutine.yield(0)
    end
    ClearQuestTarget()
    SetLayerEnabledInEvent("w1r05_plan_common", false)
    LoadDiEvent("ev4030")
    PlayDiEvent("ev4030")
    while not((IsPlayingDiEventAll()) == 0) do
    coroutine.yield(0)
    end
    ActivityTaskComplete(3, 2)
    NextBlock(3)
    AutoSave("forceimmediate")
  end
  if (GetBlock()) == 3 then
    ActivityTaskStart(3, 3)
    ShowQuestTarget('ev4900_040')
    while not((GetClearTowerNum()
    ) == 4) do
    coroutine.yield(0)
    end
    ClearQuestTarget()
    SetLayerEnabledInEvent("w1r05_plan_common", false)
    LoadDiEvent("ev4040")
    PlayDiEvent("ev4040")
    LoadDiEvent("ev4050")
    PlayDiEvent("ev4050")
    while not((IsPlayingDiEventAll()) == 0) do
    coroutine.yield(0)
    end
    ActivityTaskComplete(3, 3)
    NextBlock(4)
    AutoSave("forceimmediate")
  end
  if (GetBlock()) == 4 then
    ActivityTaskStart(3, 4)
    ShowQuestTarget('ev4900_050')
    while not((GetClearTowerNum()
    ) == 5) do
    coroutine.yield(0)
    end
    ClearQuestTarget()
    SetLayerEnabledInEvent("w1r05_plan_common", false)
    LoadDiEvent("ev4060")
    PlayDiEvent("ev4060")
    while not((IsPlayingDiEventAll()) == 0) do
    coroutine.yield(0)
    end
    ActivityTaskComplete(3, 4)
    NextBlock(5)
    AutoSave("forceimmediate")
  end
  if (GetBlock()) == 5 then
    ActivityTaskStart(3, 5)
    ShowQuestTarget('ev4900_060')
    while not((GetClearTowerNum()
    ) == 6) do
    coroutine.yield(0)
    end
    ClearQuestTarget()
    SetLayerEnabledInEvent("w1r05_plan_common", true)
    LoadDiEvent("ev4070")
    PlayDiEvent("ev4070")
    LoadDiEvent("ev4080")
    PlayDiEvent("ev4080")
    SetHUDEnabled("MapMenu",false)
    SetHUDEnabled("MainMenu",false)
    while not((IsPlayingDiEventAll()) == 0) do
    coroutine.yield(0)
    end
    ActivityTaskComplete(3, 5)
  end
  StartClearCheck()
end


-- クリア判定後、NextSequence()が呼び出されるまで常に呼び出されます。
function ClearedSequence()
  HoldPlayer()
  ClearIsland()
  NextBlock(0)
  NextSequence(20)
  ActivityComplete(3)
  Exit()
end
          -- クリア判定を行う条件を記述します。
function IsCleared()
  g_isCleared = false
end


-- クリア判定前常に呼び出されます。
function OrderSequence()
end


-- クリア判定後、NextSequence()が呼び出されるまで常に呼び出されます。
function ClearedSequence()
end
      -- クリア判定を行う条件を記述します。
function IsCleared()
  g_isCleared = 0
end


-- クリア判定前常に呼び出されます。
function OrderSequence()
  print('This is a Default Template')
end


-- クリア判定後、NextSequence()が呼び出されるまで常に呼び出されます。
function ClearedSequence()
  print('This is a Default Template')
end
              -- クリア判定を行う条件を記述します。
function IsCleared()
  g_isCleared = 0
end


-- クリア判定前常に呼び出されます。
function OrderSequence()
  print('This is a Default Template')
end


-- クリア判定後、NextSequence()が呼び出されるまで常に呼び出されます。
function ClearedSequence()
  print('This is a Default Template')
end
              -- クリア判定を行う条件を記述します。
function IsCleared()
  g_isCleared = 0
end


-- クリア判定前常に呼び出されます。
function OrderSequence()
  print('This is a Default Template')
end


-- クリア判定後、NextSequence()が呼び出されるまで常に呼び出されます。
function ClearedSequence()
  print('This is a Default Template')
end
              -- クリア判定を行う条件を記述します。
function IsCleared()
  g_isCleared = 0
end


-- クリア判定前常に呼び出されます。
function OrderSequence()
  print('This is a Default Template')
end


-- クリア判定後、NextSequence()が呼び出されるまで常に呼び出されます。
function ClearedSequence()
  print('This is a Default Template')
end
      NBFFDFDHHDHJBFFDHJBFFDFDHHDHHDHHDHHDHHDHHDH|DHDHDHDHDHDHDHD             